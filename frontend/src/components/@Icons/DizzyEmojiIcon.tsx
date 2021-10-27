import { COLOR } from 'src/constants';

const DizzyEmojiIcon = ({ width = '32px', height = '32px', color = COLOR.WHITE }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={color}
      width={width}
      height={height}
      aria-labelledby="dizzy-emoji-icon-title"
    >
      <title id="dizzy-emoji-icon-title">헤롱거리는 얼굴</title>
      <path d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2m0-2A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z" />
      <path d="M16,25.5c-3.8,0-7.13-1.95-7.53-4.5a.49.49,0,0,1,.41-.57.49.49,0,0,1,.57.41c.35,2.14,3.57,3.81,7,3.65,3.12-.15,5.7-1.71,6-3.64a.5.5,0,0,1,.56-.42.49.49,0,0,1,.42.57c-.36,2.43-3.28,4.32-6.93,4.49Z" />
      <path d="M9.5,17c-1,0-3.5,0-3.5-3.5a2.5,2.5,0,0,1,5,0,1.79,1.79,0,0,1-1.7,1.69,1.2,1.2,0,0,1-1-.47A2,2,0,0,1,8,13.5a.5.5,0,0,1,1,0,1,1,0,0,0,.13.61.21.21,0,0,0,.17.08.81.81,0,0,0,.7-.69,1.5,1.5,0,0,0-3,0C7,16,8.44,16,9.5,16A2.71,2.71,0,0,0,12,13.5a3.42,3.42,0,0,0-2-3.18,3.62,3.62,0,0,0-3.46.26,3.5,3.5,0,0,0-.45,5.49.5.5,0,0,1,0,.7.5.5,0,0,1-.71,0,4.5,4.5,0,0,1,.58-7,4.58,4.58,0,0,1,4.4-.35A4.37,4.37,0,0,1,13,13.49,3.66,3.66,0,0,1,9.5,17Z" />
      <path d="M23.5,17c-1,0-3.5,0-3.5-3.5a2.5,2.5,0,0,1,5,0,1.79,1.79,0,0,1-1.7,1.69,1.2,1.2,0,0,1-1-.47A2,2,0,0,1,22,13.5a.5.5,0,0,1,1,0,1,1,0,0,0,.13.61.21.21,0,0,0,.17.08.81.81,0,0,0,.7-.69,1.5,1.5,0,0,0-3,0C21,16,22.44,16,23.5,16A2.71,2.71,0,0,0,26,13.5a3.42,3.42,0,0,0-2-3.18,3.62,3.62,0,0,0-3.46.26,3.5,3.5,0,0,0-.45,5.49.5.5,0,0,1,0,.7.5.5,0,0,1-.71,0,4.5,4.5,0,0,1,.58-7,4.58,4.58,0,0,1,4.4-.35A4.37,4.37,0,0,1,27,13.49,3.66,3.66,0,0,1,23.5,17Z" />
    </svg>
  );
};

export default DizzyEmojiIcon;
