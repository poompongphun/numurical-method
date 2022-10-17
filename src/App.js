import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Bisection, FalsePosition } from "./pages";
import Layout from "./components/Layout";

import "./App.css";

function App() {
  const links = [
    {
      name: "Roots of Equations",
      open: false,
      links: [
        { name: "Bisection", link: "/bisection", component: <Bisection /> },
        { name: "False Position", link: "/false-position", component: <FalsePosition /> },
        {
          name: "One Point Iteration",
          link: "/one-point-iteration",
          component: <div />,
        },
        { name: "Newton Raphson", link: "/newton-raphson", component: <div /> },
        { name: "Secant", link: "/secant", component: <div /> },
      ],
    },
    {
      name: "Linear Algebra",
      path: "/linear_algebra",
      links: [
        { name: "Cramer's Rule", link: "/cramer", component: <div /> },
        {
          name: "Gauss Elimination",
          link: "/gauss-elimination",
          component: <div />,
        },
        { name: "Gauss Jordan", link: "/gauss-jordan", component: <div /> },
        {
          name: "LU Decomposition",
          link: "/lu-decomposition",
          component: <div />,
        },
        {
          name: "Cholesky Decomposition",
          link: "/cholesky-decomposition",
          component: <div />,
        },
        {
          name: "Jacobi Iteration",
          link: "/jacobi-iteration",
          component: <div />,
        },
        {
          name: "Gauss Seidel Iteration",
          link: "/gauss-seidel-iteration",
          component: <div />,
        },
      ],
    },
    {
      name: "Interpolation",
      path: "/interpolation",
      open: false,
      links: [
        { name: "Linear", link: "/linear", component: <div /> },
        { name: "Quadratic", link: "/quadratic", component: <div /> },
        { name: "Polynomial", link: "/polynomial", component: <div /> },
        { name: "Spline", link: "/spline", component: <div /> },
      ],
    },
    {
      name: "Least Square Regression",
      path: "/least_square_regression",
      open: false,
      links: [
        { name: "Linear", link: "/linear", component: <div /> },
        { name: "Polynomial", link: "/polynomial", component: <div /> },
        {
          name: "Multiple Linear",
          link: "/multiple-linear",
          component: <div />,
        },
      ],
    },
    {
      name: "Integration",
      path: "/integration",
      open: false,
      links: [
        {
          name: "Composite Trapezoidal",
          link: "/composite-trapezoidal",
          component: <div />,
        },
        {
          name: "Composite Simpson's 1/3",
          link: "/composite-simpson-1-3",
          component: <div />,
        },
        {
          name: "Composite Simpson's 3/8",
          link: "/composite-simpson-3-8",
          component: <div />,
        },
        {
          name: "Gaussian Quadrature",
          link: "/gaussian-quadrature",
          component: <div />,
        },
      ],
    },
    {
      name: "Differentiation",
      path: "/differentiation",
      open: false,
      component: <Home />,
      links: [
        {
          name: "Forward Divided Difference",
          link: "/forward",
          component: <div />,
        },
        {
          name: "Backward Divided Difference",
          link: "/backward",
          component: <div />,
        },
        {
          name: "Central Divided Difference",
          link: "/central",
          component: <div />,
        },
        {
          name: "Three Point Divided Difference",
          link: "/three-point",
          component: <div />,
        },
        {
          name: "Five Point Divided Difference",
          link: "/five-point",
          component: <div />,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Layout links={links} />

      <div style={{ marginTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {links.map((data, index) =>
            data.links.map((link, index) => (
              <Route path={link.link} element={link.component} />
            ))
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
