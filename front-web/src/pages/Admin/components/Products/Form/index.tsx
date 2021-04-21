import { makeRequest } from "core/utils/request";
import React, { useState } from "react";
import BaseForm from "../../BaseForm";
import "./styles.scss";

type FormState = {
  name: string;
  price: string;
  category: string;
  description: string;
};

type FormEvent= React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;


const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleOnChange = (event: FormEvent  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData,
      imgUrl:"https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
      categories: [{ id: formData.category }],
    };
    makeRequest({ url: "/products/", method: "POST", data: payload }).then(
      () => {
        setFormData({ name: "", category: "", price: "", description: "" });
      }
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <BaseForm title="Cadastrar um produto">
        <div className="row">
          <div className="col-6">
            <input
              value={formData.name}
              type="text"
              name="name"
              placeholder="Nome do Produto"
              className="form-control mb-5 mt-5"
              onChange={handleOnChange}
            />
            <select
              value={formData.category}
              name="category"
              className="form-control mb-5"
              onChange={handleOnChange}
            >
              <option value="1">Livros</option>
              <option value="2">Computadores</option>
              <option value="3">Eletronicos</option>
            </select>
            <input
              value={formData.price}
              name="price"
              type="text"
              placeholder="Preço"
              className="form-control mb-5"
              onChange={handleOnChange}
            />
          </div>
          <div className="col-6">
            <textarea 
            value={formData.description}
            name="description" 
            cols={30} rows={10} 
            onChange={handleOnChange}
             />
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
