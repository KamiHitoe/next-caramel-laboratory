import RenderItem from "@/components/items/RenderItem";

const HairAccessory = () => {
  return (
    <div>
      <h1 className="subtitle">ヘアアクセサリー</h1>
      <p className="align-left">
      小さな貝殻のヘアアクセサリーを身に着けて、可愛らしさをアップさせてみませんか？
      </p>
      <p className="warning align-left">
        ※写真と実物と色味が異なる場合がございますので、予めご了承ください
      </p>
      <hr />

      <RenderItem genre="hair_accessory" />
    </div>
  )
};

export default HairAccessory;


