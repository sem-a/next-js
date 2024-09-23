import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const MAX_LENGHT = 3;
const MIN_HEIGHT = 60;
const MAX_HEIGHT = 180;
const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
const hoursOfDay = Array.from({ length: 24 }, (_, i) => i + 1);

type Block = {
    id: number;
    width: number;
    height: number;
    day: number;
    top: number;
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

    const handleCellClick = (day: number, hourIndex: number) => {
        if (blocks.length === MAX_LENGHT) {
            alert("Достигнут лимит занятий");
            return;
        }

        let width = document.getElementById("cell")?.offsetWidth || 100;

        const newBlock = {
            id: Date.now(),
            width: width,
            height: MIN_HEIGHT,
            day,
            top: hourIndex * 60,
        };
        console.log(newBlock);
        setBlocks([...blocks, newBlock]);
    };

    const handleCellDoubleClick = (id: number) => {
        setBlocks((prev) => prev.filter((b) => b.id !== id));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentHour(now.getHours());
            setCurrentMinutes(now.getMinutes());
            setCurrentDay(now.getDay() === 0 ? 6 : now.getDay() - 1);
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.rowHeader}>
                    <div className={styles.cell}> </div>
                    {daysOfWeek.map((day, dayIndex) => (
                        <div
                            key={day}
                            className={`${styles.cell} ${
                                dayIndex === currentDay ? styles.currentDay : ""
                            }`}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
            <div
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
                                        onClick={() => {
                                            handleCellClick(
                                                dayIndex,
                                                hourIndex
                                            );
                                        }}
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
                                    onClick={() => {
                                        handleCellClick(dayIndex, hourIndex);
                                    }}
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
                                background: "blue",
                                height: block.height,
                                width: block.width - 14,
                                zIndex: "10px",
                                borderRadius: "18px",
                            }}
                            onDoubleClick={() =>
                                handleCellDoubleClick(block.id)
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: block.width - 14,
                                    height: "10px",
                                    background: "red",
                                    borderRadius: "18px",
                                }}
                            ></div>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: block.width - 14,
                                    height: "10px",
                                    background: "red",
                                    borderRadius: "18px",
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Calendar;
