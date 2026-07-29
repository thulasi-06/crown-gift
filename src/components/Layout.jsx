import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Home page-la back button kaatta vendaam */}
      {location.pathname !== "/" && (
       <div className="fixed top-30 left-4 z-50">
        <div className="fixed top-17 left-0 z-50">
  <button
    onClick={() => navigate(-1)}
    className="w-20 h-20   text-pink-600 flex items-center justify-center  transition hover:scale-110"
  >
    <FaArrowLeft />
  </button>
</div>
        </div>
      )}

      <Outlet />
    </>
  );
}