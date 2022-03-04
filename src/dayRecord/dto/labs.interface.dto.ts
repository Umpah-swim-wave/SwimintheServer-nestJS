import { Stroke } from 'src/common/enum/Enum';

export default interface LabInterface {
  recordId: number;
  stroke: Stroke;
  distance: number;
  time: number;
  speed: number;
}
