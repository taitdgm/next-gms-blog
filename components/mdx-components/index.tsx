import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import Code from "./Code";

const components = {
  Image,
  code: Code,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
