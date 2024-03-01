import { Controller, useFormContext } from 'react-hook-form';
import { InputProps } from './input.model';
import { StyledError, StyledInput, StyledInputContainer, StyledLabel } from './input.styled.ts';

const Input = (props: InputProps) => {
  const { 
    control, 
    isDisabled = false, 
    isRequired, 
    label, 
    name, 
    placeholder = '', 
    type = 'text' 
  } = props;

  const { formState: { errors }, getFieldState } = useFormContext();

  const hasError = !!errors?.[name];
  const fieldState = hasError ? getFieldState(name) : { error: { message: '' } };
  const errorMessage = hasError ? fieldState?.error?.message : '';

  const requiredClass = isRequired ? 'required ' : '';

  return (
    <StyledInputContainer>
      {label ? <StyledLabel className={`${requiredClass}`}>{label}</StyledLabel> : null}

      <div>
        <Controller
          control={control}
          disabled={isDisabled}
          name={name}
          render={({ field }) => {
            const { value, ...rest } = field;
            const inputValue = value ? value : '';

            return (
              <StyledInput
                className=''
                placeholder={placeholder}
                type={type}
                value={inputValue}
                {...rest}
              />
            );
          }}
        />

        {errorMessage ? <StyledError>{errorMessage}</StyledError> : null}
      </div>
    </StyledInputContainer>
  );
};

export { Input };
