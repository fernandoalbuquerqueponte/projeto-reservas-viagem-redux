import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { removeReserve } from "../../store/modules/reserve/actions";
import { MdDelete } from "react-icons/md";
export default function Reservas() {
  const reserve = useSelector((state) => state.reserve);
  const dispatch = useDispatch();
  function handleRemove(id) {
    dispatch(removeReserve(id));
  }
  return (
    <div>
      <h1 className="title">Você solicitou {reserve.length} reservas</h1>

      {reserve.map((reserve) => (
        <div key={reserve.id} className="reservas">
          <img src={reserve.image} alt={reserve.title} />

          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>
          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}
