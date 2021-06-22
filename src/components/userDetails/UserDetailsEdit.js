import { useForm } from "react-hook-form";
import api from "../../apis/serverApi";

const UserDetailsEdit = ({ initialValues, save }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...initialValues },
  });

  const onSubmit = async (data) => {
    const user = JSON.parse(localStorage.getItem("userData"));

    try {
      await api.put(`/users/${user._id}`, data);
    } catch (error) {
      console.log(error);
    }
    save();
  };

  /*firstName
  lastName
  birth
  email
  phone*/
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="p-1">
              <div>
                <label>Nom :</label>
              </div>{" "}
              <input
                class="form-control"
                {...register("firstName", { required: true })}
              />
              {errors.name && (
                <div>
                  <small className="text-danger">Entrez un nom !</small>
                </div>
              )}
            </div>
            <div className="p-1">
              <div>
                <label>Prenom :</label>
              </div>{" "}
              <input
                class="form-control"
                {...register("lastName", { required: true })}
              />
              {errors.name && (
                <div>
                  <small className="text-danger">Entrez un nom !</small>
                </div>
              )}
            </div>

            <div className="p-1">
              <div>
                <label>Date de naissance :</label>
              </div>{" "}
              <input
                class="form-control"
                type="date"
                {...register("birth", { required: true })}
              />
              {errors.birthDate && (
                <div>
                  <small className="text-danger">Entrez une date valid !</small>
                </div>
              )}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="p-1">
              <div>
                <label>Email :</label>
              </div>{" "}
              <input
                class="form-control"
                {...register("email", { required: true })}
              />
              {errors.name && (
                <div>
                  <small className="text-danger">Entrez un nom !</small>
                </div>
              )}
            </div>
            <div className="p-1 ">
              <div>
                <label>Phone :</label>
              </div>{" "}
              <input
                class="form-control"
                {...register("phone", { required: true })}
              />
              {errors.name && (
                <div>
                  <small className="text-danger">Entrez un nom !</small>
                </div>
              )}
            </div>
          </div>
          <div className="container">
            <div className="d-flex flex-row-reverse">
              <div className="col-6">
                <input type="submit" className="btn btn-dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserDetailsEdit;
