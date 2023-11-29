export const BlurOverlay = ({ className }) => {
    return (
        <div
            className={`w-[390px] h-[844px] bg-[#fcfcfc73] backdrop-blur-[128px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(128px)_brightness(100%)] shadow-blur-overlay ${className}`}
        />
    );
};
