import { taiKhoan } from "../../../config/js/settingConfig";
import { FETCH_CREDENTIALS } from "../../constants/type";

let taiKhoanNguoiDung = " ";

if (localStorage.getItem(taiKhoan)) {
  //Kiểm tra taiKhoan có trong store không => có thì lấy làm giá trị mặc định cho state
  let tkNguoiDungStore = localStorage.getItem(taiKhoan);
  taiKhoanNguoiDung = JSON.parse(tkNguoiDungStore);
}

const stateDefault = {
  taiKhoan: taiKhoanNguoiDung,
};

const ConfirmUser = (state = stateDefault, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS:
      console.log(state);

      state.taiKhoan = action.payload;
      return { ...state };
    case "DELETE_ITEM":
      state.taiKhoan = "";
      return { ...state };
    default:
      return { ...state };
  }
};

export default ConfirmUser;
