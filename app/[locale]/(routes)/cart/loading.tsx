import Container from "@/components/ui/container";
import { Spin } from "antd";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-screen p-8 flex justify-center items-center">
        <Spin size="large" />
      </div>
    </Container>
  );
};

export default Loading;
