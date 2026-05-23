import { useState, useEffect } from 'react';
import { fetchLocations } from '../services/locationService';
import '../styles/Location.css';

export default function Location() {
  const [branch, setBranch] = useState("");
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("location");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch locations with debounce
  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    if (!branch) {
      // Clear data asynchronously to avoid strict effect rules
      setTimeout(() => setData([]), 0);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const result = await fetchLocations(branch, controller.signal);
        if (active) {
          setData(result);
          setShowDropdown(true);
          setLoading(false);
        }
      } catch {
        if (active) setLoading(false);
      }
    }, 500);

    return () => {
      active = false;
      controller.abort();
      clearTimeout(timer);
    };
  }, [branch]);

  const handleSelect = (po) => {
    setSelected(po);
    localStorage.setItem("location", JSON.stringify(po));
    setShowDropdown(false);
    setBranch("");
  };

  return (
    <div className="location">
      <div className="selected">
        <p>Deliver to</p>
        <span id="loadpara">
          {selected ? `${selected.Name} - ${selected.Pincode}` : "Select a location"}
        </span>
      </div>

      <input
        id="input-fld"
        type="text"
        placeholder="Enter branch or PIN"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        onFocus={() => { if(data.length > 0) setShowDropdown(true) }}
      />

      {/* Dropdown for results */}
      {showDropdown && data.length > 0 && (
        <ul className="location-dropdown">
          {loading && <li className="location-loading">Loading...</li>}
          {!loading && data.map((po, idx) => (
            <li 
              key={idx} 
              className="location-item"
              onClick={() => handleSelect(po)}
            >
              {po.Name} - {po.Pincode}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
