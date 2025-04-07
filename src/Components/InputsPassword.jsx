import { useRef } from "react";

const InputsPassword = () => {
  const inputs = useRef([]);

  const handleInput = (e, index) => {
    if (e.key !== "Backspace" && index < 4)
      return inputs.current[index + 1]?.focus();
  };
  const handleInputCancel = (e, index) => {
    if (e.key === "Backspace" && index > 0 && inputs.current[index].value == "")
      return inputs.current[index - 1]?.focus();
  };

  return (
    <div>
      <input
        ref={(i) => {
          inputs.current[0] = i;
        }}
        type="text"
        required
        className="input-password"
        maxLength={1}
        onKeyUp={(e) => {
          handleInput(e, 0);
        }}
        onKeyDown={(e) => {
          handleInputCancel(e, 0);
        }}
      />
      <input
        ref={(i) => {
          inputs.current[1] = i;
        }}
        type="text"
        required
        className="input-password"
        maxLength={1}
        onKeyUp={(e) => {
          handleInput(e, 1);
        }}
        onKeyDown={(e) => {
          handleInputCancel(e, 1);
        }}
      />
      <input
        ref={(i) => {
          inputs.current[2] = i;
        }}
        type="text"
        required
        className="input-password"
        maxLength={1}
        onKeyUp={(e) => {
          handleInput(e, 2);
        }}
        onKeyDown={(e) => {
          handleInputCancel(e, 2);
        }}
      />
      <input
        ref={(i) => {
          inputs.current[3] = i;
        }}
        type="text"
        required
        className="input-password"
        maxLength={1}
        onKeyUp={(e) => {
          handleInput(e, 3);
        }}
        onKeyDown={(e) => {
          handleInputCancel(e, 3);
        }}
      />
      <input
        ref={(i) => {
          inputs.current[4] = i;
        }}
        type="text"
        required
        className="input-password"
        maxLength={1}
        onKeyUp={(e) => {
          handleInput(e, 4);
        }}
        onKeyDown={(e) => {
          handleInputCancel(e, 4);
        }}
      />
    </div>
  );
};

export default InputsPassword;
