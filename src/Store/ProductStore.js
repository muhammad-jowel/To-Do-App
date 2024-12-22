import axios from "axios";
import { create } from "zustand";

const ProductStore = create((set) => ({

    // Brand List--
    BrandList : null,
    BrandListRequest : async () => {
        let response = await axios.get(`http://localhost:5050/api/BrandList`);
        if (response.data['status'] === 'success') {
            set({BrandList : response.data['data']});
        }
    },

    // Category List--
    CategoryList : null,
    CategoryListRequest : async () => {
        let response = await axios.get(`http://localhost:5050/api/CategoryList`);
        if (response.data['status'] === 'success') {
            set({CategoryList : response.data['data']});
        }
    }

}));

export default ProductStore;