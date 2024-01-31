import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { updateMotorsData } from "../motors/MotorSlice";
import { useDispatch } from "react-redux";

interface FormData {
  model: string;
  color: string;
  year: string;
  insurance: string;
  kms: string;
  location: string;
  noOfOwners: string;
  transmission: string;
  externalFitments: string;
  photo: any;
}

interface CarFormProps {
  // Add any props if needed
  selectedMotor: string;
}

const FormComponent: React.FC<CarFormProps> = ({ selectedMotor }) => {
  const { handleSubmit, control, setValue, reset } = useForm<FormData>({
    defaultValues: {
      model: selectedMotor || "",
      color: "",
      year: "",
      insurance: "",
      kms: "",
      location: "",
      noOfOwners: "",
      transmission: "",
      externalFitments: "",
      photo: "",
    },
  });
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const updatedData = { ...data, model: selectedMotor };
    dispatch(updateMotorsData(updatedData));
    reset();
  };
  useEffect(() => {
    setValue("model", selectedMotor);
    console.log(selectedMotor);
  }, [selectedMotor, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Model:</label>
        <Controller
          name="model"
          control={control}
          disabled
          defaultValue={selectedMotor}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label>Color:</label>
        <Controller
          name="color"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label>Year of Manufacture:</label>
        <Controller
          name="year"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label>Insurance valid upto:</label>
        <Controller
          name="insurance"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>
      <div>
        <label>Kms:</label>
        <Controller
          name="kms"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>
      <div>
        <label>Location:</label>
        <Controller
          name="location"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>
      <div>
        <label>No of owners:</label>
        <Controller
          name="noOfOwners"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>
      <div>
        <label>Transmission:</label>
        <Controller
          name="transmission"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>
      <div>
        <label>External fitments:</label>
        <Controller
          name="externalFitments"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label>Photo:</label>
        <Controller
          name="photo"
          control={control}
          render={({ field }) => <input {...field} type="file" />}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormComponent;
