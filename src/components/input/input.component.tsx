import { Controller } from 'react-hook-form';
import { InputProps } from './input.model';

const Input = (props: InputProps) => {
  const { control, error, isDisabled = false, isRequired, label, name, placeholder = '', type = 'text' } = props;

  const requiredClass = isRequired ? 'required ' : '';

  return (
    <div className=''>
      {label ? <label className={`${requiredClass}`}>{label}</label> : null}

      <div>
        <Controller
          control={control}
          disabled={isDisabled}
          name={name}
          render={({ field }) => {
            const { value, ...rest } = field;
            const inputValue = value ? value : '';

            return (
              <input
                className=''
                placeholder={placeholder}
                type={type}
                value={inputValue}
                {...rest}
              />
            );
          }}
        />

        {error ? <div className='fv-help-block'>{error}</div> : null}
      </div>
    </div>
  );
};

export { Input };
