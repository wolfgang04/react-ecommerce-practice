import React, { useState } from "react";
import ProductPreviewModal from "./ProductPreviewModal";

const ActiveProductPreview = (props) => {
	const images = props.images;
	const [toggle, setToggle] = useState(false);
	const [currPreview, setCurrPreview] = useState(images[0]);

	const handleToggle = () => {
		setToggle((prevState) => !prevState);

		props.onClose(toggle);
	};

	return (
		<ProductPreviewModal onClose={handleToggle}>
			<div className="flex flex-col justify-center items-center h-screen">
				<img
					src={currPreview}
					alt=""
					className="w-auto h-[450px] rounded-xl"
				/>
				<div className="bg-white relative z-50 rounded-full h-14 w-14 flex justify-center items-center">
					<img
						src={
							process.env.PUBLIC_URL +
							"../../images/icon-next.svg"
						}
						alt=""
						className="h-7 w-auto"
					/>
				</div>

				<div className="pt-6 flex justify-between gap-x-5 w-[380px]">
					{images.map((image, idx) => {
						return (
							<button
								key={`preview no.${idx}`}
								onClick={() => setCurrPreview(image)}
								className=" rounded-xl"
							>
								<img
									src={image}
									alt=""
									className={`w-auto h-20 rounded-xl hover:border-Orange border-2 ${
										image === currPreview
											? "border-Orange"
											: "border-transparent"
									}`}
								/>
							</button>
						);
					})}
				</div>
			</div>
		</ProductPreviewModal>
	);
};

export default ActiveProductPreview;
