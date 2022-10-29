import { Spinner } from "native-base";
import React from "react";

interface LoaderSpinnerProps {
  label?: string;
}

const LoaderSpinner = ({ label }: LoaderSpinnerProps) => {
  return <Spinner size="lg" accessibilityLabel={label} />;
};

export default LoaderSpinner;
