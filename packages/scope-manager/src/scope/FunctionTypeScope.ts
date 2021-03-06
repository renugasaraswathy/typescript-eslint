import { TSESTree } from '@typescript-eslint/types';
import { Scope } from './Scope';
import { ScopeBase } from './ScopeBase';
import { ScopeType } from './ScopeType';
import { ScopeManager } from '../ScopeManager';

class FunctionTypeScope extends ScopeBase<
  ScopeType.functionType,
  | TSESTree.TSCallSignatureDeclaration
  | TSESTree.TSConstructorType
  | TSESTree.TSConstructSignatureDeclaration
  | TSESTree.TSFunctionType
  | TSESTree.TSMethodSignature,
  Scope
> {
  constructor(
    scopeManager: ScopeManager,
    upperScope: FunctionTypeScope['upper'],
    block: FunctionTypeScope['block'],
  ) {
    super(scopeManager, ScopeType.functionType, upperScope, block, false);
  }
}

export { FunctionTypeScope };
