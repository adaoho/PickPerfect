import pickPerfectApi from "../config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PurchasePage = () => {
  const getId = localStorage.getItem("user_id");
  const getToken = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const submitPayment = async () => {
    try {
      Swal.fire({
        title: `Redirect to Transaction`,
        timerProgressBar: true,
        timer: 4500,
        showConfirmButton: false,
        color: "#ffffff",
        background: "#282C34",
      });

      const { data } = await pickPerfectApi.post(
        `/purchase/xendit/${getId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      // console.log(data.invoiceUrl, "<<<< from xendit");
      // redirect(`${data.invoiceUrl}`);
      window.location.replace(`${data.invoiceUrl}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="overflow-x-auto justify-center items-center px-20 mt-28 relative">
        <table className="table">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Apple</div>
                    <div className="text-sm opacity-50">fruit</div>
                  </div>
                </div>
              </td>
              <td>
                2 <span className="badge badge-ghost badge-sm">gram</span>
              </td>
              <td>Rp. 20.000</td>
              <td>Purple</td>
              <th>
                <span class="material-symbols-outlined p-2 bg-pp-50 text-white rounded-lg hover:bg-pp-150 hover:scale-105 transition-all">
                  delete_sweep
                </span>
              </th>
            </tr>
          </tbody>
        </table>
        <div className="w-full h-full flex flex-col justify-center items-center py-4">
          <button
            onClick={() => submitPayment()}
            className="flex flex-row px-4 py-2 bg-pp-50 text-white rounded-lg hover:bg-pp-150 hover:scale-105 transition-all space-x-3 justify-center"
          >
            <span class="material-symbols-outlined ">shopping_cart</span>
            <p>Checkout With Total Rp 180.000</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default PurchasePage;
