import { Controller } from 'react-hook-form';
import { InputProps } from './input.model';
import { StyledInput, StyledLabel } from './input.styled';

const Input = (props: InputProps) => {
  const { 
    control, 
    error, 
    isDisabled = false, 
    isRequired, 
    label, 
    name, 
    placeholder = '', 
    type = 'text' 
  } = props;

  const requiredClass = isRequired ? 'required ' : '';

  return (
    <div className=''>
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

        {error ? <div>{error}</div> : null}
      </div>
    </div>
  );
};

export { Input };
