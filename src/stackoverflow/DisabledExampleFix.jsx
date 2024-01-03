import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
//constants
const offices = [
  { label: "Building Management Office", value: "Building Management Office" },
  {
    label: "Information Technology and Resource Office",
    value: "Information Technology and Resource Office",
  },
  {
    label: "Engineering and Science Laboratory Office",
    value: "Engineering and Science Laboratory Office",
  },
];
const purposes = [
  {
    label: "Academic Purposes - Assignment & Activities",
    value: "Academic Purposes - Assignment & Activities",
  },
  { label: "Organization Purposes", value: "Organization Purposes" },
  {
    label: "Academic Purposes - Midterms & Finals",
    value: "Academic Purposes - Midterms & Finals",
  },
  { label: "Special Events", value: "Special Events" },
  { label: "Others", value: "Others" },
];

export const ExampleInJs = () => {
  const { control, watch, handleSubmit } = useForm();
  const selectedPurpose = watch("selectedPurpose");
  const onSubmit = (data) => {
    console.log("onSubmit hit with data: ", data);
  };
  useEffect(() => {
    console.log("selected purpose changed to:", selectedPurpose);
    if (selectedPurpose?.value && selectedPurpose.value === "Others") {
      console.log("Others option hit, disabling submit");
    }
  }, [selectedPurpose]);
  return (
    <div
      className="w-full h-full flex justify-content-center align-items-center"
      style={{ backgroundColor: "white" }}
    >
      <h5>hook form + react-select example</h5>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ color: "black" }}>
            <Controller
              name="selectedOffice"
              control={control}
              render={({ field }) => (
                <Select
                  options={offices}
                  ref={field.ref}
                  value={offices.find((c) => c.value === field.value)}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              name="selectedPurpose"
              control={control}
              render={({ field }) => (
                <Select
                  options={purposes}
                  ref={field.ref}
                  value={offices.find((c) => c.value === field.value)}
                  onChange={field.onChange}
                />
              )}
            />
            {/* this is not controlled by hook form */}
            <TextField
              label="Enter Specific Purpose"
              variant="filled"
              fullWidth
              style={{
                backgroundColor:
                  selectedPurpose?.value === "Others" ? "red" : "white",
              }}
              disabled={selectedPurpose?.value === "Others" ? false : true}
            />
            {/* uncomment the controller below to use TextField with hook form (suggested))*/}
            {/*
               <Controller
                control={control}
                name="specificPurposeInputText"
                render={({ field }) => (
                  <TextField
                    label="Enter Specific Purpose"
                    variant="filled"
                    value={field.value}
                    onChange={field.onChange}
                    fullWidth
                    style={{
                      backgroundColor:
                        selectedPurpose.value === "Others" ? "red" : "white",
                    }}
                    disabled={selectedPurpose.value === "Others" ? false : true}
                  />
                )}
              /> */}
          </div>
          <div style={{ backgroundColor: "black", color: "white" }}>
            <Button type="submit">SUBMIT</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
