import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import { Slider, FormControl, FormLabel } from "@material-ui/core";

const HeaderContaner = ({ text, fontSize, textAlign }) => {
    const { connectors: { connect, drag }, selected, dragged, actions: { setProp } } = useNode((state) => ({
        selected: state.events.selected,
        dragged: state.events.dragged
    }));


    const [editable, setEditable] = useState(false);

    useEffect(() => { !selected && setEditable(false) }, [selected]);


    return (
        <div ref={ref => connect(drag(ref))}
            onClick={e => setEditable(true)}>
            <ContentEditable
                html={text}
                onChange={e =>
                    setProp(props =>
                        props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
                    )
                }
                disabled={!editable}
                tagName="h1"
                style={{ fontSize: `${fontSize}px`, textAlign }}
            />
            {
                selected && (
                    <FormControl className="text-additional-settings" size="small">
                        <FormLabel component="legend">Font size</FormLabel>
                        <Slider
                            defaultValue={fontSize}
                            step={1}
                            min={7}
                            max={50}
                            valueLabelDisplay="auto"
                            onChange={(_, value) => {
                                setProp(props => props.fontSize = value);
                            }}
                        />
                    </FormControl>
                )
            }
        </div>
    )
}

Text.craft = {
    props: {
        text: "Hi",
        fontSize: 20
    }
}

export default Text