"use client"

import React, { useState, useEffect } from "react";

export default function Calculator() {
    const [paperType, setPaperType] = useState("essay");
    const [academicLevel, setAcademicLevel] = useState("high_school");
    const [deadline, setDeadline] = useState(14);
    const [pages, setPages] = useState(1);
    const [price, setPrice] = useState(6);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const handlePaperTypeChange = (event: any) => {
        setPaperType(event.target.value);
    };
    
    const handleAcademicLevelChange = (event: any) => {
        setAcademicLevel(event.target.value);
    };
    
    const handleDeadlineChange = (event: any) => {
        console.log('change')
        setDeadline(event.target.value);
    };
    
    const handlePagesChange = (event: any) => {
        setPages(event.target.value);
        setPrice(6 + (event.target.value - 1) * 0.5);
    };
    
    const basePricePerPage = 6;
    
    const calcPrice = () => {
        const academicLevelPricing: { [key: string]: number } = {
        high_school: 1.0,
        college: 1.2,
        undergraduate: 1.4,
        masters: 1.6,
        phd: 2.0,
        };
    
        const deadlinePricing: { [key: string]: number } = {
        "8_hours": 2.5,
        "12_hours": 2.3,
        "24_hours": 2.0,
        "36_hours": 1.8,
        "48_hours": 1.6,
        "3_days": 1.4,
        "5_days": 1.2,
        "7_days": 1.1,
        "14_days": 1.0,
        };
        const academicLevelFactor = academicLevelPricing[academicLevel];
        const deadlineFactor = deadlinePricing[String(deadline)];
        const calculatedPrice =
        basePricePerPage * pages * academicLevelFactor * deadlineFactor;
        setPrice(calculatedPrice);
    };
    
    useEffect(() => {
        calcPrice();
    }, [paperType, academicLevel, deadline, pages]);

    const handleSubmit = () => {
        console.log("Ordering...");
    };
    
    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold mb-6">Price Calculator</h1>
            <div className="flex gap-4 mb-4">
                <label htmlFor="paperType">Paper Type</label>
                <select
                    name="paperType"
                    id="paperType"
                    value={paperType}
                    onChange={handlePaperTypeChange}
                >
                    <option value="essay">Essay</option>
                    <option value="research_paper">Research Paper</option>
                    <option value="thesis">Thesis</option>
                    <option value="dissertation">Dissertation</option>
                </select>
            </div>
            <div className="flex gap-4 mb-4">
                <label htmlFor="academicLevel">Academic Level</label>
                <select
                    name="academicLevel"
                    id="academicLevel"
                    value={academicLevel}
                    onChange={handleAcademicLevelChange}
                >
                    <option value="high_school">High School</option>
                    <option value="college">College</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="masters">Masters</option>
                    <option value="phd">PhD</option>
                </select>
            </div>
            <div className="flex gap-4 mb-4">
                <label htmlFor="deadline">Deadline</label>
                <select
                    name="deadline"
                    id="deadline"
                    value={deadline}
                    onChange={handleDeadlineChange}
                >
                    <option value="8_hours">8 Hours</option>
                    <option value="12_hours">12 Hours</option>
                    <option value="24_hours">24 Hours</option>
                    <option value="36_hours">36 Hours</option>
                    <option value="48_hours">48 Hours</option>
                    <option value="3_days">3 Days</option>
                    <option value="5_days">5 Days</option>
                    <option value="7_days">7 Days</option>
                    <option value="14_days">14 Days</option>
                </select>
            </div>
            <div className="flex gap-4 mb-4">
                <label htmlFor="pages">Pages</label>
                <input
                    type="number"
                    name="pages"
                    id="pages"
                    value={pages}
                    onChange={handlePagesChange}
                />
            </div>
            <div className="flex gap-4 mb-4">
                <label htmlFor="price">Price</label>
                <input type="text" name="price" id="price" value={`$${price}`} readOnly />
            </div>
            <div>
                <button className="bg-green-500 p-4" onClick={handleSubmit}>
                    order now
                </button>
            </div>
        </div>
    );
}