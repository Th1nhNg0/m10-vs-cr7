import React from "react";
import RadarChart from "./RadarChart";
import Slider from "./Slider";

export default function Graph() {
  return (
    <div className="space-y-10 divide-y-2 divide-amber-500 divide-dashed">
      <div>
        <iframe
          className="w-full h-[400px]"
          loading="lazy"
          title="Goals compare"
          src="graph/goals.html"
        ></iframe>
        <div className="max-w-4xl mx-auto mb-5 text-justify">
          <p className="mb-2 font-semibold">
            Số lượng bàn thắng giữa Ronaldo và Messi cấp độ câu lạc bộ
          </p>
          <p>
            Đây là chỉ số mà tất cả mọi người đều muốn biết mỗi khi nhắc đến một
            tiền đạo, mọi người đều phải nghĩ ngay đến, đó là thước đo chính để
            đánh giá sự thành công, hiệu quả của một tiền đạo ( trừ tiền đạo
            phòng ngự ). Số lượng bàn thắng của 2 anh trong giai đoạn đỉnh cao
            thật khủng khiếp khoảng 40-60 bàn 1 mùa, là niềm mơ ước đối với mọi
            cầu thủ và bất kỳ đội bóng tham vọng nào muốn cạnh tranh danh hiệu
            cũng thèm thuồng có một tiền đạo như các anh.
            <br /> {/* xuống hàng */}
          </p>
        </div>
        <div className="flex gap-10">
          <div className="flex-1 w-full h-full p-5 rounded-2xl aspect-video">
            <video
              muted
              playsInline
              autoPlay
              loop
              className="object-cover w-full h-full rounded-2xl"
            >
              <source src="images/gif/messi_goal.webm" type="video/webm" />
            </video>
          </div>
          <div className="flex-1 w-full h-full p-5 rounded-2xl aspect-video">
            <video
              muted
              playsInline
              autoPlay
              loop
              className="object-cover w-full h-full rounded-2xl"
            >
              <source src="images/gif/ronaldo_goal.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
      <div>
        <iframe
          className="w-full h-[450px]"
          loading="lazy"
          title="Goals type compare"
          src="graph/goals_type.html"
        ></iframe>
        <div className="max-w-4xl mx-auto mb-10 text-justify">
          <p>
            Khả năng ghi bàn của CR7 rất đa dạng: gần như các bộ phận trên cơ
            thể đều có thể ghi bàn, đặc biệt khả năng bật cao để đánh đầu, có
            thể dứt điểm 2 chân với độ hiểm hóc và lực đi cực tốt. Nếu so với
            M10 ghi bàn chân trái chủ yếu thì Ronaldo là một tiền đạo toàn diện.
            Điều này cũng dễ hiểu vì Messi chơi như một số 9 ảo hoặc tiền đạo
            cánh có xu hướng vẽ vời dắt bóng kiến thiết lối chơi phối hợp với
            đồng đội còn Ronaldo là một trung phong chọn vị trí thông minh dứt
            điểm dứt khoát gọn gàng ngay khi có khoảng trống.
          </p>
        </div>
        <Slider />
      </div>
      <div>
        <iframe
          className="w-full h-[450px]"
          title="Penalty compare"
          loading="lazy"
          src="graph/goal_equaliser.html"
        ></iframe>
        <div className="max-w-4xl mx-auto mb-10 text-justify">
          Đội bóng của họ cũng có những lúc gặp khó khăn khi bị đối thủ dẫn
          trước ở những trận đấu cần điểm để đua top trên bảng xếp hạng hay
          những trận loại trực tiếp. Vào những thời khắc ngặt nghèo vậy thì các
          cổ động viên và gần như cả đội bóng đều nhìn vào họ hi vọng họ sẽ tạo
          ra sự khác biệt đem lại bàn thắng hay còn gọi là gánh team. Sau những
          lần như vậy thì chúng ta được nghe điệp khúc "Khi cần Ronaldo/Messi
          có. Khi khó có Ronaldo/Messi". Đây cũng là một chỉ số cho thấy đẳng
          cấp của họ. Nhìn lại quá khứ thì có không ít lần họ làm nổ tung cảm
          xúc của biết bao người với những bàn thắng xuất thần cứu đội bóng của
          mình.
        </div>
        <div className="flex gap-10">
          <div className="flex-1 w-full h-full p-5 rounded-2xl aspect-video">
            <video
              muted
              playsInline
              autoPlay
              loop
              className="object-cover w-full h-full rounded-2xl"
            >
              <source
                src="images/gif/LikableSimplisticBetafish-mobile.webm"
                type="video/webm"
              />
            </video>
          </div>
          <div className="flex-1 w-full h-full p-5 rounded-2xl aspect-video">
            <video
              muted
              playsInline
              autoPlay
              loop
              className="object-cover w-full h-full rounded-2xl"
            >
              <source src="images/gif/giphy.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
      <div>
        <iframe
          loading="lazy"
          className="w-full h-[450px]"
          title="Penalty compare"
          src="graph/penalty_pie.html"
        ></iframe>
        <div className="max-w-4xl mx-auto mb-10 text-justify">
          Mọi người tưởng đá phạt đền rất dễ nhưng sự thật không phải như vậy vì
          chỉ khi đứng trên chấm 11m chúng ta mới hiểu được áp lực căng thẳng
          cực kì nặng nề đang bóp nghẹt thở cả người thực hiện lẫn các cổ dộng
          viên như thế nào đặc biệt là trong các trận đấu mang tính bước ngoặt
          vì nếu tạch thì không những làm cho đội nhà chịu các kết quả không như
          mong muốn, tinh thần xuống dốc mà sẽ trở thành miếng mồi ngon cho các
          phương tiện truyền thông chế giễu. Chính vì vậy, để ghi bàn từ 1 tình
          huống phạt đền ngoài kĩ thuật, họ còn phải cần có sự bình tĩnh, lạnh
          lùng, thần kinh thép cộng thêm một ít tiểu xảo và yếu tố may mắn nữa.
          <br />
          Tỉ lệ miss pen của M10 có vẻ cao hơn CR7 vì M10 thường hay dùng cái
          lòng trong chân trái rất ngoan của mình để dứt điểm đánh lừa thủ môn
          còn CR7 sẽ sút rất mạnh bằng mu vào góc hiểm nên cho dù thủ môn có
          đoán được hướng cũng khó cản phá được.
        </div>
      </div>

      <h2 className="pt-8 text-xl font-semibold text-center">
        Các chỉ số khác để đánh giá tổng quát màn trình diễn đóng góp của mỗi
        người vào lối chơi chung của toàn đội.
      </h2>
      <div>
        <RadarChart />
        <div className="max-w-4xl mx-auto mb-10 text-justify">
          <p className="mb-3 font-semibold">
            Thông số cho thấy khả năng phòng ngự, chuyền bóng, giữ bóng đi bóng
            để tấn công
          </p>
          <ul className="space-y-2 list-disc">
            <li>
              Chính vì 2 người là những ngôi sao xuất sắc nhất thế giới trong
              khoảng thời gian đỉnh cao của họ, cung cấp một số lượng đầu ra bàn
              thắng cho đội bóng, lối chơi của đội xoay quanh phục vụ họ nên họ
              được miễn giảm nhiệm vụ phòng ngự, họ cũng không cần phải lùi quá
              sâu để hỗ trợ phòng ngự mà chỉ cần tập trung dưỡng sức cho tấn
              công vậy nên các chỉ số về phòng thủ của họ thường không quá cao.
            </li>
            <li>
              Về khả năng chuyền bóng, mở ra cơ hội cho đồng đội tấn công, kiến
              tạo M10 nhỉnh hơn CR7 vì M10 chơi ở vị trí sở trường là kiến thiết
              dẫn dắt lối chơi tạo ra cơ hội cho đồng đội ghi bàn. M10 nhỏ con
              nên trọng tâm thấp giúp những pha đi bóng kĩ thuật của anh lắt léo
              dễ xoay sở qua người, anh cũng có nhãn quan rất tốt và thêm nữa
              những đồng đội của anh chủ yếu ăn tập với anh từ lúc trẻ được vận
              hành trong hệ thống chiến thuật nhuần nhuyễn nên số kiến tạo vượt
              trội. Cũng không nên xem thường CR7 về khả năng đi bóng cầm bóng
              qua người vì lúc trẻ anh thường xuyên có những tình huống như vậy
              nhưng mà giờ anh lớn tuổi, hơn nữa anh đã được chỉ dạy và hiểu
              rằng bàn thắng quan trọng hơn nên đã chuyển vào đá trung lộ nên
              thiên hướng được đồng đội bơm bóng vào nhiều hơn. Và thực tế thì
              số bàn thắng của CR7 đang lớn hơn M10.
            </li>
            <li>
              Ở cúp C1 châu Âu Champions league, CR7 đang nắm giữ kỉ lục ghi bàn
              của giải đầu tiểu biểu là ghi bàn nhiều nhất ở một mùa giải với 17
              bàn thắng.
            </li>
            <li>
              Đặc biệt hơn nữa các thông số ở C1 của Ronaldo và Messi ở C1 hầu
              hết dều cao hơn giải quốc nội, có thê thấy họ rất quyết tâm ở dấu
              trường này.
            </li>
          </ul>
        </div>
      </div>
      <iframe
        className="w-full h-[450px]"
        loading="lazy"
        title="Value compare"
        src="graph/value.html"
      ></iframe>
      <div>
        <iframe
          className="w-full h-[450px]"
          loading="lazy"
          title="theodoi"
          src="graph/theodoi.html"
        ></iframe>
        <div className="max-w-4xl mx-auto mb-10 text-justify">
          <p>
            Trong xã hội hiện đại, internet phát triển và toàn cầu hóa, ảnh
            hưởng của mỗi cá nhân đối với mọi người là rất lớn. bóng đá là môn
            thể thao vua, trong đó ronaldo và messi là 2 cầu thủ xuất sắc nhất
            hiện nay, Ronaldo có ảnh hưởng lớn hơn messi trên 3 nền tảng
            facebook, instagram, twitter.
          </p>
        </div>
      </div>
    </div>
  );
}
