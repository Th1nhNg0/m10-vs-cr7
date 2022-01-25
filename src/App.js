import Graph from "./Graph";
import Achievements from "./Achievements";

export default function App() {
  return (
    <div className="awsome_bg">
      <div className="max-w-screen-xl p-5 mx-auto bg-white border-2">
        <div className="max-w-screen-lg mx-auto divide-y-2 divide-y-10 divide-amber-500 divide-dashed">
          <Image />
          <Info />
          <div className="py-8 text-center ">
            <h2 className="font-mono text-4xl font-bold ">
              Messi vs Ronaldo: Who is the best?
            </h2>
            <p className="text-lg">Let find out with us!</p>
          </div>
          <Graph />
          <Achievements />
          <Summary />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="py-10">
      <h2 className="mb-5 font-mono text-5xl font-bold text-center">
        Kết luận
      </h2>
      <p className="text-justify">
        Cuối cùng, qua màn trình diễn trên sân của họ, chúng ta nhận thấy Messi
        và Ronaldo họ đều là những ngôi sao sáng nhất trên sân, là linh hồn là
        hạt nhân của đội bóng, là thủ lĩnh tinh thần chỗ dựa cho đội bóng, tầm
        ảnh hưởng rất lớn lên không chỉ trong phòng thay đồ mà còn rộng ra trên
        toàn Trái Đất, là hình mẫu là thần tượng của biết bao người từ già đến
        trẻ mỗi người có cái hay của riêng họ, phù hợp với 1 hệ thống chiến
        thuật riêng đều xuất sắc nhất trong thời đại đỉnh cao của họ. Chúng ta
        nên cảm thấy may mắn hạnh phúc khi còn được xem họ thi đấu cạnh tranh
        nhau hàng tuần và hãy tận hưởng hết những trận trận đấu bóng đá đỉnh cao
        mà các cầu thủ đã đang sẽ mang đến chứ không nên tranh cãi xem ai xuất
        sắc hơn. Và cho dù ai xuất sắc hơn nhưng chúng ta yêu cầu thủ nào thì
        chúng ta vẫn cứ yêu thôi.
        <br />
      </p>
    </div>
  );
}
function Footer() {
  return (
    <div className="py-5 my-5 text-center ">
      <p className="text-sm"> Dữ liệu được cập nhất đến ngày 24/01/2022.</p>
    </div>
  );
}
function Info() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="p-5 space-y-2">
        <p className="font-serif text-4xl font-bold text-center">
          Lionel Messi
        </p>
        <table>
          <tbody>
            <tr>
              <td>Full name: </td>
              <td className="py-2 pl-5 font-semibold">
                Lionel Andrés Messi Cuccitini
              </td>
            </tr>
            <tr>
              <td>Current Team:</td>
              <td className="py-1 pl-5 font-semibold">
                <img className="inline w-5 pb-1" src="images/583.png" alt="" />{" "}
                Paris Saint-Germain
              </td>
            </tr>
            <tr>
              <td>Number: </td>
              <td className="py-2 pl-5 font-semibold">30</td>
            </tr>
            <tr>
              <td>Position: </td>
              <td className="py-2 pl-5 font-semibold">attack - Right Winger</td>
            </tr>
            <tr>
              <td>Nationality: </td>
              <td className="py-2 pl-5 font-semibold">
                <img className="inline w-5 pb-1" src="images/9.png" alt="" />{" "}
                Argentina
              </td>
            </tr>
            <tr>
              <td>Date of Birth: </td>
              <td className="py-2 pl-5 font-semibold">
                24 June 1987 (age {new Date().getFullYear() - 1987 - 1} years)
              </td>
            </tr>
            <tr>
              <td>Height: </td>
              <td className="py-2 pl-5 font-semibold">170 cm</td>
            </tr>
            <tr>
              <td>Foot: </td>
              <td className="py-2 pl-5 font-semibold">left</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-5 space-y-2 ">
        <p className="font-serif text-4xl font-bold text-center">
          Cristiano Ronaldo
        </p>
        <table>
          <tbody>
            <tr>
              <td>Full name: </td>
              <td className="py-2 pl-5 font-semibold">
                Cristiano Ronaldo dos Santos Aveiro
              </td>
            </tr>
            <tr>
              <td>Current Team:</td>
              <td className="py-1 pl-5 font-semibold">
                <img className="inline w-5 pb-1" src="images/985.png" alt="" />{" "}
                Manchester United
              </td>
            </tr>
            <tr>
              <td>Number: </td>
              <td className="py-2 pl-5 font-semibold">7</td>
            </tr>
            <tr>
              <td>Position: </td>
              <td className="py-2 pl-5 font-semibold">
                attack - Centre-Forward
              </td>
            </tr>
            <tr>
              <td>Nationality: </td>
              <td className="py-2 pl-5 font-semibold">
                <img className="inline w-5 pb-1" src="images/136.png" alt="" />{" "}
                Portugal
              </td>
            </tr>
            <tr>
              <td>Date of Birth: </td>
              <td className="py-2 pl-5 font-semibold">
                5 Feb 1985 (age {new Date().getFullYear() - 1985 - 1} years)
              </td>
            </tr>
            <tr>
              <td>Height: </td>
              <td className="py-2 pl-5 font-semibold">187 cm</td>
            </tr>
            <tr>
              <td>Foot: </td>
              <td className="py-2 pl-5 font-semibold">right</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative ">
      <img
        className="w-full mx-auto select-none"
        src="images/wpap_messi_ronaldo_by_wedhahai_d7ba2ca-fullview.jpg"
        alt=""
      />
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
        <img
          className="w-40 animate-bounce "
          src="images/pngwing.com.png"
          alt=""
        />
      </div>
    </div>
  );
}
