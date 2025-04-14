import { useRef } from "react";

const InputsPassword = () => {
  const inputs = useRef([]);

  const handleInput = (e, index) => {
    if (e.key !== "Backspace" && index < 4)
      return inputs.current[index + 1]?.focus();
    console.log(e.key);
  };
  const handleInputCancel = (e, index) => {
    if (e.key === "Backspace" && index > 0 && inputs.current[index].value == "")
      return inputs.current[index - 1]?.focus();
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <input
          key={index}
          ref={(i) => {
            inputs.current[index] = i;
          }}
          type="text"
          required
          className="input-password"
          maxLength={1}
          onKeyUp={(e) => {
            handleInput(e, index);
          }}
          onKeyDown={(e) => {
            handleInputCancel(e, index);
          }}
        />
      ))}
    </div>
  );
};

export default InputsPassword;
