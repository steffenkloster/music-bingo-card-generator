import { HeadingProps } from "@/utils/props";
import { Dispatch, SetStateAction } from "react";
import CustomSelect from "./CustomSelect";
import { AvailableFonts } from "@/utils/fonts";

const fontOptions = Object.entries(AvailableFonts).map(([key, value]) => ({
  label: value,
  value: key,
}));

type TextControllerProps = {
  text: HeadingProps;
  setText: Dispatch<SetStateAction<HeadingProps>>;
};

const TextController: React.FC<TextControllerProps> = ({ text, setText }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Slå tekst til/fra på kortet</span>
          <input
            type="checkbox"
            className="toggle"
            checked={text.enabled}
            onChange={() => setText({ ...text, enabled: !text.enabled })}
          />
        </label>
      </div>

      <input
        type="text"
        placeholder="Skriv teksten her"
        className="input input-bordered w-full"
        onChange={(e) => setText({ ...text, text: e.target.value })}
        value={text.text}
      />

      <input
        title="Tekststørrelse"
        type="range"
        min={0}
        max="100"
        value={text.size}
        className="range"
        onChange={(e) => setText({ ...text, size: Number(e.target.value) })}
      />

      <input
        type="range"
        min={1}
        max="5"
        value={text.weight}
        className="range"
        step="1"
        title="Tekststykkelse"
        onChange={(e) => setText({ ...text, weight: Number(e.target.value) })}
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>

      <CustomSelect
        label="Skrifttype"
        options={fontOptions}
        defaultOption="roboto"
        onChange={(e) => {
          setText({ ...text, fontFamily: e.value });
        }}
      />
    </div>
  );
};

export default TextController;
