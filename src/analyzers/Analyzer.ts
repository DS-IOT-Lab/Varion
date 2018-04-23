
import {
    ImportDeclaration,
    SourceFile,
    SyntaxKind,
    Block,
    ClassDeclaration,
    ts,
    JSDoc,
    JSDocTag,
    Decorator,
    MethodDeclaration,
    Node
} from "ts-simple-ast";
import {DocCommentAnalyzer} from './DocCommentAnalyzer';

export abstract class Analyzer{
    protected jsDocAnalyzer: DocCommentAnalyzer;
    /**
     * Abstract method which analyzes a given node and then return true or false.
     * {@code False} indicates that the given node is excluded from the final source.
     * {@code True} means that the given node is included in the final source.
     *
     * @param  sourceFile source file which holds the node
     * @param  node       given node to analyzeJsDoc
     * @return            indicates whether the is excluded or not
     */
    protected abstract analyze(sourceFile: SourceFile, node: Node): boolean;
}