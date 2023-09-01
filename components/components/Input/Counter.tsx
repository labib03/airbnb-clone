import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface PropsType {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

function Counter(props: PropsType) {
  const onAdd = useCallback(() => {
    props.onChange(props.value + 1);
  }, [props.value]);

  const onReduce = useCallback(() => {
    if (props.value === 1) {
      return;
    }

    props.onChange(props.value - 1);
  }, [props.value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <h1 className="font-medium">{props.title}</h1>
        <h2 className="font-light text-gray-600">{props.subtitle}</h2>
      </div>
      <div className="flex flex-row items-center gap-4">
        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-neutral-400 text-neutral-600 transition duration-200 hover:opacity-80 active:bg-neutral-200"
          onClick={onReduce}
        >
          <AiOutlineMinus />
        </button>
        <p className="text-xl font-light text-neutral-600">{props.value}</p>
        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-neutral-400 text-neutral-600 transition duration-200 hover:opacity-80 active:bg-neutral-200"
          onClick={onAdd}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default Counter;
