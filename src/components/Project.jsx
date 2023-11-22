import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function Project(props) {
    return (
    <Card className="mt-20 w-96  bg-myColor-1 " style={{ backgroundImage: 'url("/shutterstock_228650476.jpg") ' }}>
                <CardHeader color="white" className="relative">
                    <img
                        src={props.projectImage}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody 
                    className="text-myColor-3"
                    
                >
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-white">
                        {props.projectName}
                    </Typography>
                    <Typography>
                        {props.projectDescription}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button 
                    className="hover:bg-blue-400 hover:text-myColor-1 transition-transform hover:scale-105"
                    onClick={() => window.open(props.projectLink, "_blank")}>
                        Github Repo
                    </Button>
                </CardFooter>
            </Card>
    );
}