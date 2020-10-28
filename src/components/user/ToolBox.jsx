import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "./Container";
import Card from "./Card";
import { Button } from "./Button";
import Text from "./Text";
import { Video } from "./Video";
import YouTube from "react-youtube";
import { Custom1 } from "./Custom1";
import Heading from "./Heading";

export const Toolbox = () => {
    const { connectors, query } = useEditor();

    return (
        <Box px={2} py={2}>
            <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
                {/* <Box pb={2}>
                    <Typography>Drag to add</Typography>
                </Box> */}
                {/* <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Custom1 />)} variant="contained">Custom 1</MaterialButton>
                </Grid> */}
                {/* <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Button text="Click me" size="small" />)} variant="contained">Button</MaterialButton>
                </Grid> */}
                {/* <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Video videoId="videoID" />)} variant="contained">Youtube</MaterialButton>
                </Grid> */}
                <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Text text="Hi world" />)} variant="contained">Header and Image</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Heading text="Hi world" />)} variant="contained">Header </MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Element is={Container} padding={20} canvas />)} variant="contained">Container</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Card />)} variant="contained">Card</MaterialButton>
                </Grid>
            </Grid>
        </Box>
    )
};