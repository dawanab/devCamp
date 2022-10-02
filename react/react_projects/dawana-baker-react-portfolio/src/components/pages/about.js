import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";
export default function() {
	return(
		<div className="content-page-wrapper">
			<div 
				className="left-column" 
				style={{
					background: "url(" + profilePicture + ") no-repeat",
					backgruondSize: "cover",
					backgroundPosition: "center"
				}}
			/>
			<div className="right-column">
				My bio, list of skills, yadda yadda yadda I'm smart !
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repudiandae odit dicta inventore, aut quisquam nostrum eius dolorum voluptas voluptate reprehenderit aperiam ullam error ratione quibusdam a cumque, iure commodi!
				Illo reprehenderit ipsa officia magnam, impedit, cupiditate reiciendis quaerat architecto natus quos error numquam eius aperiam. Voluptate ipsam doloremque quo nobis porro qui libero necessitatibus, nulla, consectetur odio aliquid esse.
				Tempore neque amet ratione sapiente esse accusamus omnis consectetur, vitae consequatur repudiandae iste, deleniti nisi. Laboriosam, voluptatum! Nam distinctio error numquam tenetur doloribus, sapiente quae necessitatibus libero, laudantium tempora fugit.
				Autem alias delectus harum. At autem explicabo similique, pariatur vitae fugit suscipit unde aspernatur quam impedit, dolores quasi, architecto dolor id? Atque magnam voluptatem quo perspiciatis facilis perferendis velit distinctio.
			</div>
		</div>
	);
}