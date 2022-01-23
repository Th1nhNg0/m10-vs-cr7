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
            So sánh về số lượng bàn thắng giữa Ronaldo và Messi cấp độ câu lạc
            bộ
          </p>
          <p>
            Đầu tiên là chỉ số mà tất cả mọi người đều muốn biết mỗi khi nhắc
            đến một tiền đạo, mọi người đều phải nghĩ ngay đến, đó thước đo
            chính để đánh giá sự thành công, hiệu quả của một tiền đạo ( trừ
            tiền đạo phòng ngự ). Số lượng bàn thắng của 2 anh trong giai đoạn
            đỉnh cao thật khủng khiếp khoảng 40-60 bàn 1 mùa , là niềm mơ ước
            đối với mọi cầu thủ cũng như là các đội bóng thèm thuồng có một tiền
            đạo như các anh.
            <br /> {/* xuống hàng */}
            Hiện nay thì Ronaldo đang nắm giữ kỷ lục ghi bàn mọi thời đại của
            thế giới
          </p>
        </div>
        <div className="flex gap-10">
          <div className="flex-1 w-full h-full p-5 rounded-2xl aspect-video">
            <video
              muted
              playsInline
              autoPlay
              loop
              className="object-cover w-full h-full"
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
              className="object-cover w-full h-full"
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
            Khả năng ghi bàn của CR7 rất đa dạng: bằng đầu, chân thuận, chân
            không thuận rất toàn diện nếu so với M10 ghi bàn chân trái chủ yếu.
            CR7 sút 2 có lực đi gần như nhau sút bằng mu hay lòng rất tốt, còn
            M10 chủ yếu là đặt lòng.
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
        <div className="flex gap-10">
          <div className="flex-1 w-full h-full p-5 rounded-2xl aspect-video">
            <video
              muted
              playsInline
              autoPlay
              loop
              className="object-cover w-full h-full"
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
              className="object-cover w-full h-full"
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
          Đây là một chỉ số cũng quan trọng để đánh giá một tiền đạo vì mọi
          người tưởng sút pen rất dễ nhưng sự thật không phải như vậy vì khi
          đứng trên chấm pen sẽ phải chịu áp lực căng thẳng cực kì nặng nề đặc
          biệt là trong các trận đấu mang tính bước ngoặt vì nếu tạch thì sẽ trở
          thành miếng mồi ngon cho các phương tiện truyền thông chế giễu. Ngoài
          kĩ thuật, họ còn phải cần có sự bình tĩnh, lạnh lùng, một ít tiểu xảo.
          <br />
          Tỉ lệ miss pen của M10 có vẻ cao hơn CR7 khi M10 thường hay dùng lòng
          còn CR7 sút quyết đoán = mu và vào góc hiểm.
        </div>
      </div>
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
      <h2 className="pt-8 text-xl font-semibold text-center">
        Xem vài chỉ số khác để đánh giá tổng quát về màn trình diễn và đóng góp
        của mỗi người vào lối chơi chung của toàn đội.
      </h2>

      <RadarChart />
      <iframe
        className="w-full h-[450px]"
        loading="lazy"
        title="Value compare"
        src="graph/value.html"
      ></iframe>
      <iframe
        className="w-full h-[450px]"
        title="Danh hieu CLB"
        loading="lazy"
        src="graph/sodanhhieucapCLB.html"
      ></iframe>
      <iframe
        className="w-full h-[450px]"
        loading="lazy"
        title="sotranthidau"
        src="graph/sotranthidau.html"
      ></iframe>
      <iframe
        loading="lazy"
        className="w-full h-[450px]"
        title="thephat"
        src="graph/thephat.html"
      ></iframe>
    </div>
  );
}
