import React, { useEffect, useState } from "react";
import "../../styles.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { createNewProd } from "../../features/product/helpers/createNewProd";
import { getSingleProduct } from "../../features/product/helpers/getSingleProduct";
import { editProduct } from "../../features/product/helpers/editProduct";
import { getProducts } from "../../features/product/helpers/getAllProduct";
import { useNavigate } from "react-router-dom";

const AddNewProd = () => {
  const dispatch = useDispatch();
  const { editedProductId, isEditProduct, singleProd } = useSelector(
    (store) => store.product
  );
  const navigate = useNavigate();
  const addNewProdData = [
    {
      title: "Title",
      type: "text",
      name: "title",
      placeholder: "Enter the name",
    },
    {
      title: "ImageUrl",
      type: "text",
      name: "imageUrl",
      placeholder: "Enter the ImageUrl",
    },
    {
      title: "VideoUrl",
      type: "text",
      name: "videoUrl",
      placeholder: "Enter the VideoUrl",
    },
    {
      title: "Price",
      type: "text",
      name: "price",
      placeholder: "Enter the Price",
    },

    {
      title: "Description",
      type: "text",
      name: "description",
      placeholder: "Enter the Description",
    },
    {
      title: "Highlights",
      type: "text",
      name: "highlights",
      placeholder: "Enter the Highlights",
    },
    {
      title: "Rating",
      type: "number",
      name: "rating",
      max: 5,
      min: 1,
      placeholder: "Enter the Rating",
    },
    {
      title: "Category",
      type: "text",
      name: "category",
      placeholder: "Enter the Category",
    },
  ];

  const {
    title,
    price,
    imageUrl,
    videoUrl,
    description,
    category,
    highlights,
    rating,
    id,
  } = singleProd;

  const [productDetailsInput, setProductDetailsInput] = useState({
    title: "",
    price: 1,
    imageUrl: "",
    description: "",
    videoUrl: "",
    category: "",
    highlights: "",
    rating: 1,
  });

  const productInputHandeler = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      const ratingValue = parseInt(value, 10); // Parse the value as an integer
      if (ratingValue >= 1 && ratingValue <= 5) {
        setProductDetailsInput({
          ...productDetailsInput,
          [name]: ratingValue,
        });
      }
    } else {
      setProductDetailsInput({
        ...productDetailsInput,
        [name]: value,
      });
    }
  };

  const addProductHandler = () => {
    if (isEditProduct) {
      const editPayload = {
        title: productDetailsInput.title,
        price: productDetailsInput.price,
        imageUrl: productDetailsInput.imageUrl,
        description: productDetailsInput.description,
        videoUrl: productDetailsInput.videoUrl,
        category: productDetailsInput.category,
        highlights: productDetailsInput.highlights,
        rating: productDetailsInput.rating,
        productId: id,
      };
      dispatch(editProduct(editPayload));
    } else {
      const payload = {
        title: productDetailsInput.title,
        price: productDetailsInput.price,
        imageUrl: productDetailsInput.imageUrl,
        description: productDetailsInput.description,
        videoUrl: productDetailsInput.videoUrl,
        category: productDetailsInput.category,
        highlights: productDetailsInput.highlights,
        rating: productDetailsInput.rating,
      };
      dispatch(createNewProd(payload));
    }
    dispatch(getProducts());
    navigate("/products");
  };

  useEffect(() => {
    dispatch(getSingleProduct(editedProductId));
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setProductDetailsInput(singleProd);
  }, [singleProd]);

  return (
    <div>
      <Navbar />
      <div className="add-new-container">
        {addNewProdData.map(({ title, type, placeholder, name, max, min }) => {
          return (
            <label className="common-col mr-ssm">
              {title}
              <input
                name={name}
                type={type}
                // value={singleProd?.title}
                value={productDetailsInput[name]}
                placeholder={placeholder}
                onChange={(e) => productInputHandeler(e)}
                max={max ? max : ""}
                min={min ? min : ""}
              />
            </label>
          );
        })}
        <button className="btn-primary" onClick={() => addProductHandler()}>
          {isEditProduct ? "Edit" : "Add"}
        </button>
        {/* <button onClick={() => fetchProduct(23)}>test</button> */}
      </div>
    </div>
  );
};

export default AddNewProd;
