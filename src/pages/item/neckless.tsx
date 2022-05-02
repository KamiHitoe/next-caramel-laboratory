import RenderItem from "@/components/items/RenderItem";

const Neckless = () => {
  return (
    <div>
      <h1 className="subtitle">ネックレス</h1>
      <p className="align-left">
      コーディネートの一部として、首元に可愛らしさをプラスしてみませんか？
お友達へのプレゼントにも最適です！
      </p>
      <p className="warning align-left">
        ※写真と実物と色味が異なる場合がございますので、予めご了承ください
      </p>
      <hr />

      <RenderItem genre="neckless" />
    </div>
  )
};

export default Neckless;


