package com.kh.honeypoint.admin.member.model.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.honeypoint.admin.common.PageInfo;
import com.kh.honeypoint.admin.common.SearchPaging;
import com.kh.honeypoint.admin.member.model.vo.MemberMgt;
import com.kh.honeypoint.admin.member.model.vo.Search;

import sun.rmi.runtime.Log;

@Repository("mDao")
public class MemberDao {
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	

	public int selectListCount() {
		return Integer.parseInt((String) sqlSession.selectOne("memberMgtMapper.selectListCount"));
	}

	/* MEMBER LIST */
	public ArrayList<MemberMgt> selectList(PageInfo pi) {
		
		int offset = (pi.getCurrentPage() -1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		ArrayList<MemberMgt> list = (ArrayList)sqlSession.selectList("memberMgtMapper.memberListUp", null, rowBounds);
		return list;
	
		/*
		return (ArrayList)sqlSession.selectList("memberMgtMapper.memberListUp", null, rowBounds);
		*/
	}
	
	/* MEMBER SECSN LIST */
	public int memberSecsnListCount() {
		return Integer.parseInt((String) sqlSession.selectOne("memberMgtMapper.memberSecsnListCount"));
	}
	
	public ArrayList<MemberMgt> memberSecsnList(PageInfo pi) {	
		
		int offset = (pi.getCurrentPage() -1) * pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, pi.getBoardLimit());
		
		ArrayList<MemberMgt> list = (ArrayList)sqlSession.selectList("memberMgtMapper.memberSecsnList", null, rowBounds);
		return list;
	}

	/* MEMBER DELETE */
	public int deleteMemberMgt(int mNo) {
		return sqlSession.update("memberMgtMapper.deleteMemberMgt", mNo);
	}

	/* MEMBER SEARCH */	
	public int memKeySearchCount(SearchPaging sp) {
		return Integer.parseInt((String) sqlSession.selectOne("memberMgtMapper.memKeySearchCount", sp));
	}

	public ArrayList<MemberMgt> memKeySearch(SearchPaging sp) {
		System.out.println("Dao: " + sp);
		int offset = (sp.getCurrentPage() -1) * sp.getBoardLimit();
		RowBounds rowbounds = new RowBounds(offset, sp.getBoardLimit());
		
		return (ArrayList)sqlSession.selectList("memberMgtMapper.memKeySearch", sp, rowbounds);
	}















	public int deleteMgt(int mngNo) {
		System.out.println("Dao: " + mngNo);
		return sqlSession.update("memberMgtMapper.deleteMgt", mngNo);
	}

	
	
	
	
	
	public String secsnC(int i) {
		return sqlSession.selectOne("memberMgtMapper.secsnC", i);
	}
}
