import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addReserve } from "../../store/modules/reserve/actions";
import api from "../../services/api";
import "./style.css";

import { MdFlightTakeoff } from "react-icons/md";

export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  function handleAdd(trip) {
    dispatch(addReserve(trip));
  }

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");
      setTrips(response.data);
      console.log(response.data);
    }
    loadApi();
  }, []);
  return (
    <div>
      <div className="box">
        {trips.map((trip) => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? "Disponivel" : "indisponivel"}</span>
            <button type="button" onClick={() => handleAdd(trip)}>
              <MdFlightTakeoff size={16} color="#fff" />
              Solicitar reserva
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
