import {Analyzer} from './Analyzer';
import {Node, SourceFile, ts} from 'ts-simple-ast';

export class ImportAnalyzer extends Analyzer {

    protected analyze(sourceFile: SourceFile, node: Node<ts.Node>): boolean {
        throw new Error("Method not implemented.");
    }
}
