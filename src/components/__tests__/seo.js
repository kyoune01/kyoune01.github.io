import React from "react"
import renderer from "react-test-renderer"
import SEO from "../seo"
import * as Gatsby from "gatsby"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      author: "Florian",
      description: "My description",
      title: "My Title",
    },
  },
}))

describe("SEO", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SEO title="Home" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
