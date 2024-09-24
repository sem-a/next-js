import React from "react";
import Container from "../container";
import styles from "./index.module.scss";
import { H3 } from "../title";
import { instructionList } from "../_const/_const";

const Instruction = () => {
    return (
        <Container padding="0" margin="21px 0 21px 3px">
            <Container padding="0" marginTop="14px"><H3>Как пользоваться календарем?</H3></Container>
            <Container padding="0" margin="14px 0">
                <ul className={styles.list}>
                    {instructionList.map( (item) => (<li key={item.id}>{item.text}</li>))}
                </ul>
            </Container>
        </Container>
    );
};

export default Instruction;
