import cx from "clsx";
import { Roboto_Mono } from "next/font/google";
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

type Props = {
  children?: string | React.ReactNode;
};

export default function Code(props: Props) {
  return (
    <>
      <code className={cx(robotoMono.className, "text-sm")}>
        {props.children}
      </code>
    </>
  );
}
