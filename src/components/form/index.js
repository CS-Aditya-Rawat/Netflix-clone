import React from "react";
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./styles/form";

export default function Form({ children, ...restPtops }) {
  return <Container {...restPtops}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restPtops }) {
  return <Base {...restPtops}>{children}</Base>;
};

Form.Error = function FormError({ children, ...restPtops }) {
  return <Error {...restPtops}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restPtops }) {
  return <Title {...restPtops}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restPtops }) {
  return <Text {...restPtops}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restPtops }) {
  return <TextSmall {...restPtops}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restPtops }) {
  return <Link {...restPtops}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restPtops }) {
  return <Input {...restPtops}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restPtops }) {
  return <Submit {...restPtops}>{children}</Submit>;
};
