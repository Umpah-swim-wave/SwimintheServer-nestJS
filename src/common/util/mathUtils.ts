export default {
  /**
   * 속력을 구하는 메서드 (거리 / 시간)
   * @param distance 거리
   * @param speed 시간
   * @returns 소숫점 첫 째 자리까지 반올림하여 속력을 리턴한다.
   */
  getSpeed: (distance, time): string => {
    return (distance / time).toFixed(1);
  },
};
