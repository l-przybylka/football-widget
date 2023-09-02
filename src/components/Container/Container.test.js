import { render } from "@testing-library/react";
import { Container } from "."


describe("Container", () => {
    it("should load the container", () => {
        const { getByTestId } = render(<Container>Hello</Container>);
        const pageContainer = getByTestId("page-container");

        expect(pageContainer).toBeDefined();
    }) 
})