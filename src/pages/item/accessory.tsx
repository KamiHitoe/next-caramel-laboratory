import RenderItem from "@/components/items/RenderItem";

const Accessory = () => {
  return (
    <div>
      <h1 className="subtitle">桜貝アクセサリー</h1>
      <p className="align-left">
        "幸せを呼ぶ貝"と言われる桜貝を用いたネックレスです。あなたのもとにも幸せが訪れるようにいかかですか★
お友達や恋人へのプレゼントにもピッタリです！
      </p>
      <p className="warning align-left">
        ※写真と実物と色味が異なる場合がございますので、予めご了承ください
      </p>
      <hr />

      <RenderItem genre="accessory" />
    </div>
  )
};

export default Accessory;


