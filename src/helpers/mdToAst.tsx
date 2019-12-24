// @ts-ignore
import remark from 'remark'

// @ts-ignore
import toHAST from 'mdast-util-to-hast'

const mdToAst = (input: string): any => {
  const mdAst = remark.parse(input)
  return toHAST(mdAst)
}

export default mdToAst
