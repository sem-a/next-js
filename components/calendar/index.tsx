import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Container from "../container";
import { FormFlex, FormItem, Label, Select } from "../form-items";
import Button from "../button";
import { borderRadius, colorMain, colorMainHover } from "../_const/_const";
import { Text } from "../title";

const MAX_LENGHT = 3;
const MIN_HEIGHT = 60;
const daysOfWeek = [
    { value: 0, title: "ПН" },
    { value: 1, title: "ВТ" },
    { value: 2, title: "СР" },
    { value: 3, title: "ЧТ" },
    { value: 4, title: "ПТ" },
    { value: 5, title: "СБ" },
    { value: 6, title: "ВС" },
];
const hoursOfDay = Array.from({ length: 24 }, (_, i) => i + 1);

type Block = {
    id: number;
    width: number;
    height: number;
    time: number;
    day: number;
    top: number;
};

type Time = {
    value: number;
    title: number;
};

const Calendar: React.FC = () => {
    const [currentHour, setCurrentHour] = useState<number>(
        new Date().getHours()
    );
    const [currentMinutes, setCurrentMinutes] = useState<number>(
        new Date().getMinutes()
    );
    const [currentDay, setCurrentDay] = useState<number>(
        new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
    );
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [time, setTime] = useState([
        { value: 1, title: 1 },
        { value: 1.5, title: 1.5 },
        { value: 2, title: 2 },
        { value: 3, title: 3 },
    ]);
    const [day, setDay] = useState<number>(0);
    const [timeCurr, setTimeCurr] = useState<number>(1);
    const [position, setPosition] = useState({ top: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleButtonlClick = (day: number, timeCurr: number) => {
        let totalSumTime = 0;
        let filtredTime: Time[];

        let width = document.getElementById("cell")?.offsetWidth || 100;

        const newBlock = {
            id: Date.now(),
            width: width,
            height: MIN_HEIGHT * timeCurr,
            time: timeCurr,
            day,
            top: 0,
        };

        blocks.forEach((block) => {
            totalSumTime += block.time;
        });
        if (totalSumTime === MAX_LENGHT) {
            alert("Превышен лимит занятий");
            return;
        }
        totalSumTime += newBlock.time;

        switch (totalSumTime) {
            case 1:
                filtredTime = time.filter(
                    (item) => item.value === 1 || item.value === 2
                );
                setTime(filtredTime);
                break;
            case 2:
                filtredTime = time.filter((item) => item.value === 1);
                setTime(filtredTime);
                break;
            case 1.5:
                filtredTime = time.filter((item) => item.value === 1.5);
                setTime(filtredTime);
                break;
            default:
                break;
        }

        setBlocks([...blocks, newBlock]);
    };

    const handleCellDoubleClick = (id: number) => {
        setBlocks((prev) => prev.filter((b) => b.id !== id));
    };

    const [draggingBlock, setDraggingBlock] = useState<number | null>(null);

    const handleMouseDown = (id: number) => {
        setDraggingBlock(id);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (draggingBlock !== null) {
            const blockIndex = blocks.findIndex(
                (block) => block.id === draggingBlock
            );

            const currentBlock = blocks[blockIndex];

            let top = event.clientY - position.top - currentBlock.height / 2;

            if (top < 0) top = 0;

            setBlocks((prevBlocks) =>
                prevBlocks.map((block) =>
                    block.id === draggingBlock
                        ? {
                              ...block,
                              top: top,
                          }
                        : block
                )
            );
        }
    };

    const handleMouseUp = (e: any) => {
        if (draggingBlock !== null) {
            const blockIndex = blocks.findIndex(
                (block) => block.id === draggingBlock
            );

            const currentBlock = blocks[blockIndex];

            const top = e.clientY - position.top - currentBlock.height / 2;

            // Определяем ближайшую кратную 5 высоту
            const nearestMultiple = top > 0 ? Math.round(top / 5) * 5 : 0;

            setBlocks((prevBlocks) =>
                prevBlocks.map((block) =>
                    block.id === draggingBlock
                        ? { ...block, top: nearestMultiple }
                        : block
                )
            );
        }

        setDraggingBlock(null); // Завершаем перетаскивание
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentHour(now.getHours());
            setCurrentMinutes(now.getMinutes());
            setCurrentDay(now.getDay() === 0 ? 6 : now.getDay() - 1);
        }, 60000);

        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setPosition({ top: rect.top });
        }
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            clearInterval(interval);
        };
    }, [draggingBlock]);

    return (
        <>
            <Container padding="0" margin="21px 0 21px 5px">
                <FormFlex gap="28px" alignItems="center">
                    <FormFlex alignItems="center" gap="14px">
                        <Label htmlFor="day">Выберите день: </Label>
                        <Select
                            onChange={(e) => {
                                setDay(Number(e.target.value));
                            }}
                            id="day"
                            options={daysOfWeek}
                        />
                    </FormFlex>
                    <FormFlex alignItems="center" gap="14px">
                        <Label htmlFor="time">Выберите длительность: </Label>
                        <Select
                            onChange={(e) => {
                                setTimeCurr(Number(e.target.value));
                                console.log(timeCurr);
                            }}
                            id="time"
                            options={time}
                        />
                    </FormFlex>
                    <Button
                        background={colorMain}
                        backgroundHover={colorMainHover}
                        transition="0.5s ease 0s"
                        padding="21px"
                        borderRadius={borderRadius}
                        color="white"
                        onClick={() => {
                            handleButtonlClick(day, timeCurr);
                        }}
                    >
                        Добавить
                    </Button>
                </FormFlex>
            </Container>
            <div className={styles.container}>
                <div className={styles.rowHeader}>
                    <div className={styles.cell}> </div>
                    {daysOfWeek.map((day, dayIndex) => (
                        <div
                            key={day.value}
                            className={`${styles.cell} ${
                                dayIndex === currentDay ? styles.currentDay : ""
                            }`}
                        >
                            {day.title}
                        </div>
                    ))}
                </div>
            </div>
            <div
                ref={containerRef}
                className={styles.container}
                style={{ marginTop: "13px" }}
            >
                {hoursOfDay.map((hour, hourIndex) => {
                    if (hourIndex === 23) {
                        return (
                            <div key={hour} className={styles.row}>
                                <div
                                    className={`${styles.timeLabel} ${styles.cell}`}
                                >
                                    <p></p>
                                </div>
                                {daysOfWeek.map((_, dayIndex) => (
                                    <div
                                        key={dayIndex}
                                        className={styles.cell}
                                    ></div>
                                ))}
                            </div>
                        );
                    }
                    return (
                        <div key={hour} className={styles.row}>
                            <div
                                className={`${styles.timeLabel} ${styles.cell}`}
                            >
                                <p>{hour}:00</p>
                            </div>
                            {daysOfWeek.map((_, dayIndex) => (
                                <div
                                    key={dayIndex}
                                    id="cell"
                                    className={styles.cell}
                                ></div>
                            ))}
                        </div>
                    );
                })}
                <div
                    className={styles.currentTimeLine}
                    style={{ top: `${currentHour * 60 + currentMinutes}px` }}
                ></div>
                <div className={styles.addedBlocks}>
                    {blocks.map((block) => (
                        <div
                            key={block.id}
                            style={{
                                position: "absolute",
                                top: `${block.top}px`,
                                left: `${
                                    block.width + 7 + block.day * block.width
                                }px`,
                                background: "#287effc2",
                                height: block.height,
                                width: block.width - 14,
                                zIndex: "10px",
                                borderRadius: "18px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onDoubleClick={() =>
                                handleCellDoubleClick(block.id)
                            }
                            onMouseDown={() => handleMouseDown(block.id)}
                        >
                            <Text color="white">
                                {("0" + Math.floor(block.top / 60)).slice(-2)}:
                                {("0" + (block.top % 60)).slice(-2)}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Calendar;
