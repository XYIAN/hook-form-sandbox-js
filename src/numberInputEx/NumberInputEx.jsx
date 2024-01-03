import React from "react";
import { useForm, Controller } from "react-hook-form";
import { InputNumber } from "primereact/inputnumber";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { classNames } from "primereact/utils";

export const MyForm = () => {
  const { control, handleSubmit, formState } = useForm({
    mode: "onBlur", // Trigger validation onBlur
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="numberInput">Number Input:</label>
        <Controller
          name="numberInput"
          control={control}
          defaultValue={0}
          rules={{
            validate: (value) => {
              // Custom validation rule to limit input length to 10 characters
              return (
                String(value).length <= 10 ||
                "Input length cannot be greater than 10"
              );
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <InputNumber
                id={field.name}
                inputRef={field.ref}
                value={field.value}
                onBlur={field.onBlur}
                onValueChange={(e) => field.onChange(e)}
                useGrouping={false}
                inputClassName={classNames({ "p-invalid": fieldState.error })}
                showButtons
              />
              {fieldState.invalid && (
                <span className="p-error">{fieldState.error?.message}</span>
              )}
            </>
          )}
        />
      </div>
      <button type="submit" disabled={formState.isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
