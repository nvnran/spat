import React from 'react';
import { Container } from './Container';
import { Element, useNode } from '@craftjs/core';
import { Video } from './Video';

export const Custom1VideoDrop = ({ children }) => {
    const {
        connectors: { connect },
    } = useNode();
    return (
        <div ref={connect} className="flex-1 ml-5 h-full">
            {children}
        </div>
    );
};
Custom1VideoDrop.craft = {
    rules: {
        canMoveIn: (incoming, self, helper) => {
            return (
                incoming.data.type == Video && helper(self.id).decendants().length == 0
            );
        },
    },
};
export const Custom1 = (props) => {
    return (
        <Container {...props} className="overflow-hidden">
            <div className="w-24">
                <h2 className="text-xs text-white">
                    You can only drop
          <br />
          one video here.
        </h2>
            </div>
            <Element canvas is={Custom1VideoDrop} id="wow">
                <Video />
            </Element>
        </Container>
    );
};

Custom1.craft = {
    ...Container.craft,
    displayName: 'Custom 1',
};